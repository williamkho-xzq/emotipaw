import DemoUploader from '@/components/demo/demo-uploader';

export default function DemoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">EmotiPaw Demo</h1>
      <p className="mb-8">
        Upload a photo of your pet and our AI will analyze their emotions.
      </p>
      <DemoUploader />
    </div>
  );
}
