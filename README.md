# 🚀 Svelte Boilerplate Kit

A comprehensive, production-ready boilerplate for Svelte applications with essential components and utilities that every project needs.

## ✨ Features

### 🎨 UI Components
- **Button** - Multiple variants (primary, secondary, danger, success, outline) with loading states
- **Input** - Form inputs with validation, labels, and error states
- **Card** - Flexible card component with optional headers
- **Modal** - Accessible modal dialogs with backdrop and keyboard navigation
- **Toast** - Notification system with auto-dismiss and manual control
- **Dropdown** - Accessible dropdown menus with click-outside handling

### 🔐 Authentication System
- Complete auth store with persistent state
- Login form with validation
- User session management
- Automatic initialization

### 🌙 Dark Mode Support
- System preference detection
- Manual theme toggle
- Persistent theme selection
- Smooth transitions

### 📱 Responsive Design
- Mobile-first approach
- All components work on all screen sizes
- Tailwind CSS for consistent styling

### ⚡ Performance Optimized
- Built with Vite for fast development
- Optimized production builds
- Tree-shakeable components
- Minimal bundle size

## 🛠️ Tech Stack

- **SvelteKit** - Full-stack framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Vitest** - Unit testing framework
- **Playwright** - E2E testing
- **ESLint & Prettier** - Code formatting and linting

## 🚀 Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd svelte-boilerplate-kit

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
open http://localhost:5173
```

## 📦 Component Usage

### Button Component

```svelte
<script>
  import { Button } from '$lib';
</script>

<!-- Basic usage -->
<Button>Click me</Button>

<!-- With variants -->
<Button variant="danger">Delete</Button>
<Button variant="success">Save</Button>

<!-- With loading state -->
<Button loading>Saving...</Button>

<!-- Different sizes -->
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Input Component

```svelte
<script>
  import { Input } from '$lib';
  let email = '';
</script>

<Input
  type="email"
  label="Email Address"
  placeholder="Enter your email"
  bind:value={email}
  required
/>
```

### Modal Component

```svelte
<script>
  import { Modal, Button } from '$lib';
  let showModal = false;
</script>

<Button onclick={() => showModal = true}>Open Modal</Button>

<Modal bind:open={showModal} title="Confirm Action">
  <p>Are you sure you want to continue?</p>
  <div class="flex justify-end space-x-2 mt-4">
    <Button variant="outline" onclick={() => showModal = false}>Cancel</Button>
    <Button variant="danger">Confirm</Button>
  </div>
</Modal>
```

### Toast Notifications

```svelte
<script>
  import { toast } from '$lib';
  
  function showSuccess() {
    toast.success('Operation completed successfully!');
  }
  
  function showError() {
    toast.error('Something went wrong!');
  }
</script>
```

### Authentication

```svelte
<script>
  import { auth, LoginForm } from '$lib';
  
  // Check if user is authenticated
  $: isLoggedIn = $auth.isAuthenticated;
  
  function handleLogout() {
    auth.logout();
  }
</script>

{#if isLoggedIn}
  <p>Welcome, {$auth.user.name}!</p>
  <button onclick={handleLogout}>Logout</button>
{:else}
  <LoginForm />
{/if}
```

### Theme Toggle

```svelte
<script>
  import { theme } from '$lib';
</script>

<button onclick={() => theme.toggle()}>
  Toggle Theme
</button>
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:unit

# Run linting
npm run lint

# Format code
npm run format
```

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   └── auth/         # Authentication components
│   ├── stores/           # Svelte stores
│   └── index.js          # Component exports
├── routes/               # SvelteKit routes
├── app.html              # HTML template
└── app.css               # Global styles
```

## 🎯 Component Features

### Button
- ✅ Multiple variants (primary, secondary, danger, success, outline)
- ✅ Different sizes (sm, md, lg)
- ✅ Loading states with spinner
- ✅ Disabled states
- ✅ Link support (href prop)
- ✅ Full accessibility support

### Input
- ✅ All HTML input types
- ✅ Label and error message support
- ✅ Required field indicators
- ✅ Validation styling
- ✅ Dark mode support

### Modal
- ✅ Backdrop click to close
- ✅ Escape key to close
- ✅ Focus management
- ✅ Multiple sizes
- ✅ Accessible (ARIA attributes)

### Toast System
- ✅ Multiple types (success, error, warning, info)
- ✅ Auto-dismiss with configurable duration
- ✅ Manual dismiss
- ✅ Queue management
- ✅ Smooth animations

### Authentication
- ✅ Persistent login state
- ✅ Form validation
- ✅ Loading states
- ✅ Error handling
- ✅ Automatic initialization

## 🎨 Customization

All components use Tailwind CSS classes and can be easily customized by:

1. **Modifying component props** - Most styling can be controlled via props
2. **Extending Tailwind config** - Add your own colors, fonts, etc.
3. **CSS custom properties** - Override specific styles
4. **Component composition** - Build complex components from simple ones

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📄 License

MIT License - feel free to use this in your projects!

## 🙏 Acknowledgments

- Built with [SvelteKit](https://kit.svelte.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from various sources
- Inspired by modern design systems

---

**Happy coding! 🎉**