import Button from "@/components/common/button";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function ShopPagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="mt-6 flex items-center justify-center sm:mt-8">
      {currentPage > 1 && (
        <Button style="secondary" onClick={() => onPageChange(currentPage - 1)}>
          Previous
        </Button>
      )}

      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          style={currentPage === page ? "primary" : "secondary"}
        >
          {page}
        </Button>
      ))}

      {currentPage < totalPages && (
        <Button onClick={() => onPageChange(currentPage + 1)} style="secondary">
          Next
        </Button>
      )}
    </nav>
  );
}
