import {
    useMemo,
    useState,
} from "react";

import CertificateCard from "../components/CertificateCard";
import SectionTitle from "../components/SectionTitle";
import { certificates } from "../data/certificates";

function Certifications() {
    const [category, setCategory] =
        useState("All");

    const [search, setSearch] =
        useState("");

    const [showAll, setShowAll] =
        useState(false);

    const categories = useMemo(
        () => [
            "All",
            ...new Set(
                certificates.map(
                    (certificate) =>
                        certificate.category,
                ),
            ),
        ],
        [],
    );

    const filteredCertificates =
        useMemo(() => {
            const normalizedSearch =
                search.trim().toLowerCase();

            return certificates.filter(
                (certificate) => {
                    const matchesCategory =
                        category === "All" ||
                        certificate.category ===
                        category;

                    const matchesSearch =
                        !normalizedSearch ||
                        certificate.title
                            .toLowerCase()
                            .includes(
                                normalizedSearch,
                            ) ||
                        certificate.issuer
                            .toLowerCase()
                            .includes(
                                normalizedSearch,
                            ) ||
                        certificate.category
                            .toLowerCase()
                            .includes(
                                normalizedSearch,
                            );

                    return (
                        matchesCategory &&
                        matchesSearch
                    );
                },
            );
        }, [category, search]);

    const displayedCertificates =
        showAll
            ? filteredCertificates
            : filteredCertificates.slice(
                0,
                8,
            );

    return (
        <section
            className="section"
            id="certificates"
        >
            <div className="container">
                <SectionTitle
                    eyebrow="Certifications"
                    title="Continuous learning across technology"
                    description="Professional certificates, technical courses, networking programs, simulations and specialized training."
                />

                <div className="certificate-controls">
                    <input
                        type="search"
                        placeholder="Search certificates..."
                        value={search}
                        onChange={(event) => {
                            setSearch(
                                event.target.value,
                            );

                            setShowAll(false);
                        }}
                    />

                    <div className="category-buttons">
                        {categories.map(
                            (categoryName) => (
                                <button
                                    type="button"
                                    key={categoryName}
                                    className={
                                        category ===
                                            categoryName
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => {
                                        setCategory(
                                            categoryName,
                                        );

                                        setShowAll(false);
                                    }}
                                >
                                    {categoryName}
                                </button>
                            ),
                        )}
                    </div>
                </div>

                {displayedCertificates.length >
                    0 ? (
                    <div className="certificates-grid">
                        {displayedCertificates.map(
                            (certificate) => (
                                <CertificateCard
                                    key={
                                        certificate.title
                                    }
                                    certificate={
                                        certificate
                                    }
                                />
                            ),
                        )}
                    </div>
                ) : (
                    <div className="empty-message surface-card">
                        No certificates match your
                        search.
                    </div>
                )}

                {filteredCertificates.length >
                    8 && (
                        <div className="center-button">
                            <button
                                type="button"
                                className="button button-secondary"
                                onClick={() =>
                                    setShowAll(
                                        (current) => !current,
                                    )
                                }
                            >
                                {showAll
                                    ? "Show Fewer Certificates"
                                    : `Show All ${filteredCertificates.length} Certificates`}
                            </button>
                        </div>
                    )}
            </div>
        </section>
    );
}

export default Certifications;