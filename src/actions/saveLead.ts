'use server';

import db from '@/db/db';

export const saveEmail = async (email: string) => {
  try {
    const existingEmail = await db.leads.findFirst({
      where: {
        email: email,
      },
    });

    if (existingEmail) {
      return;
    }

    await db.leads.create({
      data: {
        email,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
