import {IPhoto} from './photo.interface';

export interface IPhotoDetails extends IPhoto {
  albumId: number;
  thumbnailUrl: string;
}
