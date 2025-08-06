// Note: This component will use shadcn/ui Table components once installed
// For now, creating a placeholder structure

interface DataTableColumn<T> {
  key: keyof T;
  title: string;
  render?: (value: unknown, record: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  loading?: boolean;
  emptyMessage?: string;
}

export function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  loading = false,
  emptyMessage = "No data available",
}: DataTableProps<T>) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center py-12 border rounded-lg border-border bg-card">
        <div className="text-muted-foreground">{emptyMessage}</div>
      </div>
    );
  }

  return (
    <div className="border rounded-lg overflow-hidden bg-card">
      {/* Table Header */}
      <div className="border-b bg-muted/50">
        <div
          className="grid gap-4 p-4"
          style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
        >
          {columns.map((column) => (
            <div
              key={String(column.key)}
              className="font-medium text-sm text-muted-foreground"
            >
              {column.title}
            </div>
          ))}
        </div>
      </div>

      {/* Table Body */}
      <div>
        {data.map((record, index) => (
          <div
            key={index}
            className="border-b last:border-b-0 hover:bg-muted/30 transition-colors"
          >
            <div
              className="grid gap-4 p-4"
              style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
            >
              {columns.map((column) => (
                <div key={String(column.key)} className="text-sm">
                  {column.render
                    ? column.render(record[column.key], record)
                    : String(record[column.key] || "")}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Placeholder for future pagination
export function DataTablePagination() {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="text-sm text-muted-foreground">
        Showing 1 to 10 of 100 results
      </div>
      <div className="flex items-center gap-2">
        {/* Pagination controls will be added here */}
        <span className="text-sm text-muted-foreground">Page 1 of 10</span>
      </div>
    </div>
  );
}
