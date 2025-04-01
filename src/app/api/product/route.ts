export async function GET() {
    return Response.json({
        success: true,
        message: "Products retrieved successfully",
        data: [
            {
                id: 1,
                name: "Ergonomic Office Chair",
                categoryId: 1,
                categoryType: "furniture",
                description: "Comfortable office chair with adjustable height and lumbar support.",
                price: 150.00,
                stockQuantity: 50,
                material: "Mesh and Metal",
                weightCapacity: 250,
                dimensions: { width: 24, height: 40, depth: 24 }
            },
            {
                id: 2,
                name: "Convertible Sofa Bed",
                categoryId: 2,
                categoryType: "furniture",
                description: "Stylish sofa that converts into a comfortable bed.",
                price: 299.99,
                stockQuantity: 30,
                material: "Fabric and Wood",
                weightCapacity: 500,
                dimensions: { width: 80, height: 35, depth: 40 }
            },
            {
                id: 3,
                name: "Wooden Dining Table",
                categoryId: 2,
                categoryType: "furniture",
                description: "Solid wood dining table with seating for six.",
                price: 499.99,
                stockQuantity: 25,
                material: "Oak Wood",
                weightCapacity: 800,
                dimensions: { width: 72, height: 30, depth: 36 }
            },
            {
                id: 4,
                name: "Bookshelf",
                categoryId: 4,
                categoryType: "furniture",
                description: "Tall bookshelf with five adjustable shelves.",
                price: 120.00,
                stockQuantity: 40,
                material: "Engineered Wood",
                weightCapacity: 100,
                dimensions: { width: 30, height: 72, depth: 12 }
            },
            {
                id: 5,
                name: "Modern Nightstand",
                categoryId: 6,
                categoryType: "furniture",
                description: "Sleek nightstand with a drawer and open shelf for storage.",
                price: 89.99,
                stockQuantity: 60,
                material: "MDF and Metal",
                weightCapacity: 50,
                dimensions: { width: 18, height: 24, depth: 16 }
            },
            {
                id: 6,
                name: "Queen Size Bed Frame",
                categoryId: 5,
                categoryType: "furniture",
                description: "Durable queen size bed frame with a modern design.",
                price: 199.99,
                stockQuantity: 20,
                material: "Steel and Wood",
                weightCapacity: 600,
                dimensions: { width: 60, height: 14, depth: 80 }
            },
            {
                id: 7,
                name: "Reclining Gaming Chair",
                categoryId: 1,
                categoryType: "furniture",
                description: "Ergonomic gaming chair with reclining function and footrest.",
                price: 179.99,
                stockQuantity: 35,
                material: "PU Leather and Metal",
                weightCapacity: 300,
                dimensions: { width: 26, height: 50, depth: 28 }
            }
        ],
    });
}