'use client';

interface BlogFiltersProps {
  categories: string[];
  authors: string[];
  onCategoryChange: (category: string) => void;
  onAuthorChange: (author: string) => void;
  selectedCategory: string;
  selectedAuthor: string;
}

export default function BlogFilters({
  categories,
  authors,
  onCategoryChange,
  onAuthorChange,
  selectedCategory,
  selectedAuthor,
}: BlogFiltersProps) {
  return (
    <div className="space-y-6 mb-12">
      {/* Categories Filter */}
      <div>
        <h3 className="text-white text-lg font-medium mb-3">Categories</h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onCategoryChange('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 border ${
              selectedCategory === 'all'
                ? 'bg-linear-to-r from-[#4F46E5] to-[#6366F1] text-white border-[#4F46E5] shadow-lg'
                : 'bg-[#161B22] text-[#9CA3AF] border-gray-800 hover:border-[#4F46E5]'
            }`}
            style={selectedCategory === 'all' ? {
              background: 'linear-gradient(90deg, #4F46E5 0%, #6366F1 100%)',
              boxShadow: '0 6px 20px rgba(79, 70, 229, 0.3)'
            } : {}}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 capitalize border ${
                selectedCategory === category
                  ? 'text-white border-[#4F46E5]'
                  : 'bg-[#161B22] text-[#9CA3AF] border-gray-800 hover:border-[#4F46E5]'
              }`}
              style={selectedCategory === category ? {
                background: 'linear-gradient(90deg, #4F46E5 0%, #6366F1 100%)',
                boxShadow: '0 6px 20px rgba(79, 70, 229, 0.3)'
              } : {}}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Authors Filter */}
      {authors.length > 0 && (
        <div>
          <h3 className="text-white text-lg font-medium mb-3">Authors</h3>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onAuthorChange('all')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 border ${
                selectedAuthor === 'all'
                  ? 'bg-[#161B22] border-[#4F46E5] ring-2 ring-[#4F46E5]'
                  : 'bg-[#161B22] border-gray-800 hover:border-[#4F46E5]'
              }`}
            >
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)' }}
              >
                A
              </div>
              <span className="text-white font-medium">All Authors</span>
            </button>
            {authors.map((author) => (
              <button
                key={author}
                onClick={() => onAuthorChange(author)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 border ${
                  selectedAuthor === author
                    ? 'bg-[#161B22] border-[#4F46E5] ring-2 ring-[#4F46E5]'
                    : 'bg-[#161B22] border-gray-800 hover:border-[#4F46E5]'
                }`}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)' }}
                >
                  {author.charAt(0).toUpperCase()}
                </div>
                <span className="text-white font-medium">{author}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
