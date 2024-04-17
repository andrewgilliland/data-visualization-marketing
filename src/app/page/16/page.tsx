import ArticleLayout from "@/components/layouts/ArticleLayout";
import Text from "@/components/Text";
import RadicleMap from "@/components/maps/RadicleMap";

export default function PageSixteen() {
  return (
    <ArticleLayout title="Maps" page={16}>
      <div className="flex flex-col items-center bg-gray-900 rounded-lg mt-8 p-4">
        <RadicleMap className="" />
        <div className="bg-gray-300 max-w-fit px-2 py-1 rounded">
          <div className="flex justify-center items-center">
            <div className="bg-orange-600 h-3 w-3 rounded" />
            <p className="text-sm text-orange-600 font-medium ml-1">Current</p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-gray-700 h-3 w-3 rounded" />
            <p className="text-sm text-gray-700 font-medium ml-1">Planned</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Text>
          Graphical display emphasizing relationships between elements of some
          space, such as geography, regions, or themes.
        </Text>
        <Text className="mt-2">
          Maps are visual representations of the world around us. They can be
          used to show physical features, political boundaries, population
          distribution, and more.
        </Text>
      </div>
    </ArticleLayout>
  );
}
