import PageHeader from "../components/PageHeader";

export default function FiturXyz() {
    return (
        <div className="p-4">
            {/* Page Header */}
                  <PageHeader title="Fitur XYZ" breadcrumb={["Dashboard", "Fitur XYZ"]} />
            <h1>Ini adalah halaman untuk fitur XYZ</h1>
        </div>
    );
}