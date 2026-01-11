interface BakeryItemCardProps {
  name: string;
  description: string;
  image: string;
  price?: number;
}

const BakeryItemCard = ({ name, description, image, price }: BakeryItemCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-4xl">🍪</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
            {name}
          </h3>
          {price && (
            <span className="text-accent font-medium whitespace-nowrap">
              {price.toFixed(2)}€
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BakeryItemCard;
