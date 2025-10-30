const SkeletonCard = () => (
    <div className="animate-pulse bg-slate-900/40 rounded-xl overflow-hidden">
      <div className="h-40 bg-slate-800" />
      <div className="p-4 space-y-2">
        <div className="h-4 bg-slate-700 rounded w-3/4"></div>
        <div className="h-3 bg-slate-800 rounded w-1/2"></div>
      </div>
    </div>
  );
  
  export default SkeletonCard;
  