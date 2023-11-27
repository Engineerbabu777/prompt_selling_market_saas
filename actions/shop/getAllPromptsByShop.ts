import prisma from '@/lib/prismaDb'
import { User, currentUser } from '@clerk/nextjs/server'




export async function getAllPromptsByShop () {
  try {
    // GETTING THE USER FROM CLERK!
    const user: User | null = await currentUser()

    // GETTING THE USER ID SO WE CAN FIND THE SELLER PROMPTS FROM ALL OF OUR PROMPTS!
    const sellerId = user?.id

    // FINDING ALL THE PROMPTS WHERE SELLER-ID IS EQUAL TO USER-ID && ALSO INCLUDES THE DATA OF ORDERS!!
    const prompts = await prisma.prompts.findMany({
      where: {
        sellerId
      },
      include: {
        orders: true
      }
    })
    // RETUNING THE PROMPTS!
    return prompts
  } catch (error) {
    console.log('get prompts error', error)
  }
}
