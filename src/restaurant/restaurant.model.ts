import * as mongoose from 'mongoose';
import { RestaurantSchema } from 'src/schemas/restaurant.schema';

export const RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);
