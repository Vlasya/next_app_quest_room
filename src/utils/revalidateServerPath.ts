'use server';

import { revalidatePath } from 'next/cache';

const revalidateServerPath = async(path: string) => {
  revalidatePath(path);
};

export default revalidateServerPath;
