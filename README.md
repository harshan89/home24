# 🎥 Product Demo & 📚 Documentation

## Product Video demo

![system-dashboard](https://github.com/user-attachments/assets/cb4b0e36-f081-48e6-9da4-2db0722519c6)

## Product Overview

This product has been strategically designed to efficiently manage a large-scale application, ensuring seamless scalability as the system expands. It remains highly resilient even in demanding production environments, allowing for rapid modifications to product types without compromising performance or stability.

## Frontend Architecture

Since we are not utilizing a micro frontend architecture, the frontend has been structured for scalability by isolating business logic within a dedicated business model layer. Meanwhile, the API layer, leveraging DTO models, ensures smooth communication with the backend. This separation keeps the service layer and Redux/Saga independent, promoting flexibility, maintainability, and resilience as the system grows in complexity.

<a href="https://youtu.be/VSZHjOhECuw" target="_blank">
  <img src="https://github.com/user-attachments/assets/cb4b0e36-f081-48e6-9da4-2db0722519c6" alt="Watch Demo" />
</a>

### Class Structure (Business Models)

The class structure of this product module has been meticulously designed to uphold SOLID principles, ensuring a highly maintainable and scalable architecture.This approach enables seamless modifications, extensions, and enhancements without introducing unintended side effects to the broader system. The following diagram illustrates how a sample concrete class is implemented by extending an abstract class and implementing the relevant interface classes.

![product class structure](https://github.com/user-attachments/assets/c29d4dc1-1c85-401f-88e5-65b0f2baea15)

## Features

- ✅ Login to the back office with email and password
- ✅ See and navigate a product category tree
- ✅ See a list of products belonging to a specific category in pages of 5, 10, 20, 50 elements per page
- ✅ Sort product list by different fields (e.g., id, name) in ascending/descending order
- ✅ View the product information on a separate product details page
- ❌ Add/modify attributes of a product. Possible attribute types: "number", "text", "url", "tags", "boolean"
- ✅ See the last modified product in a custom widget on top of the page (custom here means that you have to implement a new component, not using the one that the component library of your choice provides)
- ✅ Logout from the back office

#### Future To-Do

- Add tooltips (Enhance user experience with helpful tooltips across the interface.)
- Add more validations (Ensure data integrity and improve error handling.)
- Install a global notification system & handle notifications (Improve communication by managing notifications efficiently.)
- Move drawers and notifications to a custom hook for reusability (Enhance modularity and code reuse.)
- Refactor product details into separate components based on product types (Improve maintainability by structuring components per product type.)
- Implement UI-level functionality to fetch products based on category ID (The groundwork is done; focus on the user interface.)

## Tech

Used below open source projects to work properly:

- [Typescript] - Made entiry project type safe
- [Ant Design] - UI boilerplate for modern web apps
- [React/Nextjs] - Fullstack React framework
- [Tailwind] - A utility-first CSS framework
- [node.js] - Nextjs run on top of node.js

## Testing

- Component testing **RTL & Jest** `npm run test`
- e2e Testing **Cypress** `npm run cypress:open`

## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd home24-frontend
npm run dev
```

## Docker

```sh
cd home24-frontend
docker build -t home24-app .
docker run -p 3000:3000 home24-app
```

## Deployement

Project has been deploy to Vercel environment

- https://home24-frontend.vercel.app
- **username**: admin
- **password**: 123

-- API endpoints:
- **GET**: https://home24-frontend.vercel.app/api/product
- **POST**: https://home24-frontend.vercel.app/api/user

## 🙏 Final Note

Thank you for the opportunity to work on this interview assignment. It has been a great experience to apply architectural principles and best practices to build a scalable and maintainable system. I appreciate the challenge and the opportunity to showcase my skills.
