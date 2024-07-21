<template>
  <!-- Hero Section -->
  <header class="bg-tertiary py-20">
    <div class="container mx-auto text-center">
      <h1 class="text-4xl font-bold text-white">Welcome to MyApp</h1>
      <p class="text-white mt-4">
        The best application to manage your projects.
      </p>
      <button class="mt-8 px-4 py-2 bg-primary text-white rounded">
        Get Started
      </button>
    </div>
  </header>

  <!-- Main Content -->
  <main class="py-12">
    <div class="container mx-auto">
      <!-- Feature Section -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-tertiary mb-4">Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 bg-white rounded shadow">
            <h3 class="text-xl font-bold text-tertiary mb-2">Easy to Use</h3>
            <p class="text-zinc">
              Our application is intuitive and easy to use.
            </p>
          </div>
          <div class="p-6 bg-white rounded shadow">
            <h3 class="text-xl font-bold text-tertiary mb-2">Security</h3>
            <p class="text-zinc">
              Your data is protected with the best security measures.
            </p>
          </div>
          <div class="p-6 bg-white rounded shadow">
            <h3 class="text-xl font-bold text-tertiary mb-2">Support</h3>
            <p class="text-zinc">
              We offer 24/7 support for any inquiries you have.
            </p>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section>
        <h2 class="text-2xl font-bold text-tertiary mb-4">Testimonials</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-6 bg-white rounded shadow">
            <p class="text-zinc">
              "MyApp has changed the way I manage my projects. It's amazing!"
            </p>
            <div class="mt-4 text-tertiary font-bold">John Doe</div>
          </div>
          <div class="p-6 bg-white rounded shadow">
            <p class="text-zinc">
              "The best application I have used for my business. Highly
              recommended."
            </p>
            <div class="mt-4 text-tertiary font-bold">Jane Smith</div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
