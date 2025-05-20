
# 📄 DocCollab – Real-Time Collaborative Document Editor

**DocCollab** is a real-time collaborative document editor that enables teams to create, edit, and manage documents seamlessly. Built with modern web technologies, it offers a user-friendly interface and robust features to enhance team productivity.

---

## 🚀 Features

- **Real-Time Collaboration**: Multiple users can edit documents simultaneously with instant updates.
- **Rich Text Editing**: Utilize a powerful editor to format text, insert images, and more.
- **User Authentication**: Secure login and registration system to manage user access.
- **Document Management**: Create, edit, delete, and organize documents efficiently.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Editor**: Tiptap (based on ProseMirror)
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Real-Time Communication**: WebSockets (e.g., Socket.IO or similar)
- **Deployment**: Vercel

---

## 📦 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [PostgreSQL](https://www.postgresql.org/) database
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/krushna001m/DocCollab.git
   cd DocCollab
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**

   Create a `.env.local` file in the root directory and add the following:

   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/doccollab
   NEXTAUTH_SECRET=your_generated_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

   Replace `user`, `password`, and other placeholders with your actual database credentials.

4. **Set up the database:**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🧪 Testing

To be implemented.

---

## 🙌 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tiptap](https://tiptap.dev/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---
## 👨‍💻 Author

* **Krushna Mengal**
  GitHub: [@krushna001m](https://github.com/krushna001m)
