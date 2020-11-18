import {getCustomRepository, Repository} from 'typeorm';

import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';


class DeleteTransactionService {
  public async execute(id:string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const deleteRepository = await transactionsRepository.findOne(id);
    
    if(!deleteRepository) {
      throw new AppError("Cannot delete a Repository that does not Exists")
    }

    await transactionsRepository.remove(deleteRepository);
  }
}

export default DeleteTransactionService;
