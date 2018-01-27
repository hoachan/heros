export interface RepositoryInterface {
    /**
     * Open database
     */
    openDatabase(dbName : string);

    /**
     * insert record to database
     */
    insert(nameTable : string, newRecord : any);

    /**
     * delete record base on id
     */
    delete(nameTable : string, id : any);

    /**
     * fetch all recode from database
     */
    query(nameTable : string);
}