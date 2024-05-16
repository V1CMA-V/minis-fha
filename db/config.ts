import { defineDb, column } from 'astro:db';

// Define your schema and resolvers here

const SuscriptionPet = {
  columns: {
    id: column.text({ primaryKey: true }), // Primary key
    user_id: column.text(), // Foreign key to the Users table
    pet_name: column.text(), // Name of the pet
    age: column.number(), // Age of the pet
    breed: column.text(),  // Breed of the pet
    plan_id: column.text({ references: () => Plan.columns.id }), // Foreign key to the Plans table
    suscriptionDate: column.date(), // Date of suscription
  }
}

const Plan = {
  columns: {
    id: column.text({ primaryKey: true }), // Primary key
    name: column.text(), // Name of the plan
    price: column.number(), // Price of the plan
    description: column.text(), // Description of the plan
  }

}

// https://astro.build/db/config
export default defineDb({
  tables: { SuscriptionPet, Plan}
});
