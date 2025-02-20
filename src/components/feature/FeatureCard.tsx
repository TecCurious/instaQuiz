import { Feature } from "@/types/quize";

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;