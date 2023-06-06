import { fail, type Actions } from "@sveltejs/kit";
import { prisma } from "$lib/server/prisma";
import type { PageServerLoad } from "./$types";

export const actions: Actions = {
    createPost:async ({ request }) => {
        const { profileID, content, img, visibility, parentPostID } = Object.fromEntries(await request.formData()) as { 
            profileID: string, 
            content: string, 
            img: string, 
            visibility: string, 
            parentPostID: string | undefined
        }

        try {
            await prisma.post.create({
                data: {
                    profileId: parseInt(profileID),
                    content: content,
                    visibility: visibility,
                    img: img,
                    parentPostID: ( parentPostID ? parseInt(parentPostID) : undefined),
                }
            })
        }
        catch (error) {
            console.error(error)
            return fail (500, { message: "Could not publish post" })
        }

        return {
            status: 201
        }
    }
}

export const load: PageServerLoad = async ({params}) => {
    return {
        comments: await prisma.post.findMany({
            where: {
                parentPostID: Number(params.id),
            },
            orderBy: {
                date: 'desc'
            }
        }),
        originalPost: await prisma.post.findUnique({
            where: {
                id: Number(params.id),
            },
        }),
        profiles: await prisma.profile.findMany(),
    }
};