import prisma from '$lib/server/prisma';
import { env } from '$env/dynamic/private';

export async function load() {
	console.log('DATABASE_URL:', env.DATABASE_URL);
  console.log('cwd:', process.cwd());
	const users = await prisma.user.findMany({
		include: {
			posts: true
		}
	});

	return {
		users
	};
}
