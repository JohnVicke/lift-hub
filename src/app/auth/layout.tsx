import React from "react";

export default function AuthLayout(props: React.PropsWithChildren) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#12021B] pt-20 text-white">
      <div className="mx-auto w-full max-w-md">{props.children}</div>
    </main>
  );
}
