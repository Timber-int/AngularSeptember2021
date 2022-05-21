import {IUser} from './user.interface';

export interface IUserDetails extends IUser {
  email: string;
  website: string;
}
