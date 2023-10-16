import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
// insert one
// export async function GET() {
//   try {
//     const prisma = new PrismaClient();
//     await prisma.brands.create({
//       data: {brandName: "Apple", brandImage: "123Apple.jpg"},
//     });
//     return NextResponse.json({status: "Success", data: result});
//   } catch (e) {
//     return NextResponse.json({
//       status: "fail",
//       data: e,
//     });
//   }
// }

// insert Many
// export async function GET() {
//   try {
//     const prisma = new PrismaClient();
//     await prisma.brands.createMany({
//       data: [
//         {brandName: "Apple1", brandImage: "121Apple.jpg"},
//         {brandName: "Apple2", brandImage: "122Apple.jpg"},
//         {brandName: "Apple3", brandImage: "123Apple.jpg"},
//       ],
//     });
//     return NextResponse.json({status: "Success", data: result});
//   } catch (e) {
//     return NextResponse.json({
//       status: "fail",
//       data: e,
//     });
//   }
// }

// find many
// export async function GET() {
//   try {
//     const prisma = new PrismaClient();
//     let list = await prisma.brands.findMany();
//     return NextResponse.json({status: "Success", result: list});
//   } catch (e) {
//     return NextResponse.json({
//       status: "fail",
//       data: e,
//     });
//   }
// }

// update one Query
// export async function GET() {
//   try {
//     const prisma = new PrismaClient();
//     await prisma.brands.update({
//       where: {id: 1},
//       data:     {brandName: "Applest", brandImage: "121Apple.jpg"},
//     });
//     return NextResponse.json({status: "Success"});
//   } catch (e) {
//     return NextResponse.json({
//       status: "fail",
//       data: e,
//     });
//   }
// }

// update many

// export async function GET() {
//   try {
//     const prisma = new PrismaClient();
//     await prisma.brands.updateMany({
//       where: [{id: 1}, {id: 2}],
//       data: [
//         {brandName: "Applest", brandImage: "121Apple.jpg"},
//         {brandName: "hello", brandImage: "121Apple.jpg"},
//       ],
//     });
//     return NextResponse.json({status: "Success"});
//   } catch (e) {
//     return NextResponse.json({
//       status: "fail",
//       data: e,
//     });
//   }
// }

// delete
// export async function GET() {
//   try {
//     const prisma = new PrismaClient();
//     await prisma.brands.delete({
//       where: {id: 1},

//     });
//     return NextResponse.json({status: "Success"});
//   } catch (e) {
//     return NextResponse.json({
//       status: "fail",
//       data: e,
//     });
//   }
// }
// export async function GET() {
//   try {
//     const prisma = new PrismaClient();
//     let brands = await prisma.brands.findMany(); // Assuming your model is named 'brand' (it should match your Prisma model)

//     return NextResponse.json({msg: "Success", data: brands});
//   } catch (e) {
//     return NextResponse.json({
//       status: "fail",
//       data: e.message, // Get the error message from the error object
//     });
//   }
// }
export async function GET() {
  try {
    const prisma = new PrismaClient();
    let brands = await prisma.brands.findMany({
      where: {
        id: 3,
      },
      select: {
        id: true,
        brandName: true,
      },
    }); // Assuming your model is named 'brand' (it should match your Prisma model)

    return NextResponse.json({msg: "Success", data: brands});
  } catch (e) {
    return NextResponse.json({
      status: "fail",
      data: e.message, // Get the error message from the error object
    });
  }
}
