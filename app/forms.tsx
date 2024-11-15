"use client";

export const Form = () => {
    return (
        <input
            type="file"
            name="file"
            onChange={async (e) => {
                if (e.target.files) {
                    const formData = new FormData();
                    Object.values(e.target.files).forEach((file) => {
                        formData.append("file", file);
                    });

                    const response = await fetch("/api/upload", {
                        method: "POST",
                        body: formData,
                    });

                    const result = await response.json();
                    if (result.success) {
                        alert("Upload ok : " + result.name);
                    } else {
                        alert("Upload failed");
                    }
                }
            }}
            className="w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-emerald-700
                hover:file:bg-gray-200"
        />
    );
};