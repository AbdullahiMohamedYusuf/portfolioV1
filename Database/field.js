import mongoose from 'mongoose';
import { CreateItem } from './Models.js';

var TestUser = {
    title: "AirForce 1",
    discription: "Cheap High quality shoes",
    price: 100
}

CreateItem(TestUser)
