export const metadata = {
  title: "GPT-3 Open AI",
  description: "GPT-3 is Modern Landing Page",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
