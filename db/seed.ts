import { db, Plan } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Plan).values([
		{
			id: 'plan-1',
			name: 'Basico',
			price: 5000,
			description: 'Enseñar comandos básicos y mejorar la conducta general.',
		},
		{
			id: 'plan-2',
			name: 'Avanzado',
			price: 8000,
			description: 'Adiestramiento de nivel avanzado, incluyendo comportamientos específicos y corrección de conductas complejas.',
		},
		{
			id: 'plan-3',
			name: 'Personalizado',
			price: 500,
			description: 'Programa personalizado basado en una evaluación detallada de las necesidades del perro y del propietario.',
		},
	]);

}
