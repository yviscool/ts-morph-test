import { FilterQuery, PaginateOptions, PaginateResult, Types } from 'mongoose';



export declare class BaseModel {
    create_at?: Date;
    update_at?: Date;
    deleted?: boolean;
}

export declare class Shop extends BaseModel {
    name?: string;
    country?: string;
    sellerId?: string;
    mwsToken?: string;
    userId?: Types.ObjectId;
    platform?: string;
    isAuth?: boolean;
}

interface Bar<T, R> {
    name: string;
    age: number;
    test: T
    test1: R; 
}
export type Foo = Bar<string, number>
