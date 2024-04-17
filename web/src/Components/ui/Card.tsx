export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="bg-wisteria-200/30 p-3 rounded-md">{children}</article>
  );
};
