const modules = import.meta.glob("../assets/images/*.{jpg,jpeg,png,webp}", { eager: true });

const images: Record<string, string> = {};
for (const path in modules) {
  const file = path.split("/").pop()!.replace(/\.(jpg|jpeg|png|webp)$/i, "");
  images[file] = (modules[path] as { default: string }).default;
}

export function getImage(name: string): string | undefined {
  return images[name];
}
