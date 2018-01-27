import { RepositoryInterface } from './../models/repositoryInterface';
import { Injectable } from '@angular/core';
import { Database } from '@ngrx/db';

@Injectable()
export class IndexDbRepositoryService{

    constructor(private db: Database) {}

    /**
     * open Database
     * @dbName : name of database : string
     */
    openDatabase (dbName : string){
        return this.db.open(dbName);
    }

    /**
     * insert record to database
     * @nameTable : string
     * @newRecord : array
     * @return 
     */
    insert(nameTable : string, newRecord : any){
        return  this.db.insert(nameTable, newRecord);
    }

    /**
     * fetch data from table
     * @nameTable : String
     */
    query(nameTable : string){
        return this.db.query(nameTable);
    }

    /**
     * delete record
     * @nameTable :string
     * @id : array<id>
     */
     delete(nameTable : string, id : any){
        return this.db.executeWrite('books', 'delete', id)
     }
}