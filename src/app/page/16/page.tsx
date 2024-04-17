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
          Data visualization is a representation of data and information through
          the use of graphics.
        </Text>
        <Text className="mt-2">
          Charts, graphs, plots, maps, infographics are all types of data
          visualizations.
        </Text>
        <Text className="mt-2">
          These visual displays of data help communicate data relationships in a
          way that is easy to digest.
        </Text>
      </div>
    </ArticleLayout>
  );
}
