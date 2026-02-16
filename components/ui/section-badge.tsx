export const SectionBadge = ({ children }: React.PropsWithChildren) => {
  return (
    <span className="text-label text-primary-100 inline-block p-1 uppercase">
      {children}
    </span>
  );
};
