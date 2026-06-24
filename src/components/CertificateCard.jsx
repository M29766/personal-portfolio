import {
    FaArrowUpRightFromSquare,
    FaCertificate,
} from "react-icons/fa6";

function CertificateCard({
    certificate,
}) {
    return (
        <article className="certificate-card surface-card">
            <div className="certificate-icon">
                <FaCertificate />
            </div>

            <div className="certificate-information">
                <span className="certificate-category">
                    {certificate.category}
                </span>

                <h3>{certificate.title}</h3>

                <p>{certificate.issuer}</p>

                <span className="certificate-date">
                    {certificate.date}
                </span>
            </div>

            <div className="certificate-buttons">
                <a
                    href={certificate.file}
                    target="_blank"
                    rel="noreferrer"
                >
                    View PDF
                </a>

                {certificate.verify && (
                    <a
                        href={certificate.verify}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Verify
                        <FaArrowUpRightFromSquare />
                    </a>
                )}
            </div>
        </article>
    );
}

export default CertificateCard;