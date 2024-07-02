import React from "react";


export default function Signup() {
    return (
        <div class="min-h-screen flex items-center justify-center bg-background text-foreground">
            <div class="w-full max-w-sm p-6 bg-card rounded-lg shadow-md">
                <h2 class="text-2xl font-bold mb-2 text-center">Sign in to your account</h2>
                <p class="text-muted-foreground mb-6 text-center">Enter your email and password to sign in</p>
                <form class="space-y-4">
                    <input type="email" placeholder="name@example.com" class="w-full p-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                    <input type="password" placeholder="password" class="w-full p-3 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                    <button type="submit" class="w-full p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80">Sign In</button>
                </form>
                <div class="flex items-center my-4">
                    <hr class="flex-grow border-muted" />
                    <span class="mx-2 text-muted-foreground">OR CONTINUE WITH</span>
                    <hr class="flex-grow border-muted" />
                </div>
                <button class="w-full p-3 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center hover:bg-secondary/80">
                    <img aria-hidden="true" alt="google-icon" src="https://openui.fly.dev/openui/24x24.svg?text=G" class="mr-2" />
                    Google
                </button>
            </div>
        </div>
    );
}
