interface PaginationProps {
	current: number;
	total: number;
	onChange: (page: number) => void;
  }
  
  const Pagination = ({ current, total, onChange }: PaginationProps) => {
	if (total <= 1) return null;
  
	const pages = Array.from({ length: Math.min(total, 5) }, (_, i) => {
	  const start = Math.max(1, current - 2);
	  return start + i;
	}).filter((p) => p <= total);
  
	return (
	  <div className="flex items-center gap-2 justify-center mt-6">
		<button
		  onClick={() => onChange(Math.max(1, current - 1))}
		  disabled={current === 1}
		  className="px-3 py-1 rounded bg-slate-800 disabled:opacity-50"
		>
		  Prev
		</button>
		{pages.map((p) => (
		  <button
			key={p}
			onClick={() => onChange(p)}
			className={`px-3 py-1 rounded ${
			  p === current ? "bg-emerald-500 text-slate-950" : "bg-slate-800"
			}`}
		  >
			{p}
		  </button>
		))}
		<button
		  onClick={() => onChange(Math.min(total, current + 1))}
		  disabled={current === total}
		  className="px-3 py-1 rounded bg-slate-800 disabled:opacity-50"
		>
		  Next
		</button>
	  </div>
	);
  };
  
  export default Pagination;
  