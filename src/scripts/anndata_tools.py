import os
import anndata as ad
import pandas as pd

SHARED_DRIVE = "/Volumes/osumi-sutherland/development"

def extract_genes_from_anndata(anndata_path, gene_name_column, prefix, output_path):
    """
    Extracts gene names from the AnnData object and saves them to a ROBOT template.
    Params:
        anndata_path: path to the AnnData object.
        gene_name_column: column name containing the gene names.
        prefix: prefix for the gene IDs (such as ensembl or ncbigene).
        output_path: path to the output file.
    """
    if os.path.exists(anndata_path):
        anndata = ad.read_h5ad(anndata_path)
    elif os.path.exists(SHARED_DRIVE):
        anndata = ad.read_h5ad(os.path.join(SHARED_DRIVE, anndata_path))
    else:
        raise FileNotFoundError(f"File not found: {anndata_path}. Consider mounting the shared drive.")
    genes = anndata.var.index.unique().tolist()
    records = list()
    records.append(['ID', 'SC %', 'A rdfs:label', 'A oboInOwl:hasExactSynonym SPLIT=|'])
    for gene_id in genes:
        data = [prefix + ':' + gene_id, 'SO:0000704', anndata.var.loc[gene_id][gene_name_column], '']
        records.append(data)

    df = pd.DataFrame(records, columns=["ID", "TYPE", "NAME", "SYNONYMS"])
    df.to_csv(output_path, sep="\t", index=False)
    anndata.file.close()  # Close the AnnData file to free resources

if __name__ == "__main__":
    # Anndata source: https://celltype.info/project/609
    anndata_path = "/Users/hk9/Downloads/Cross-species Spinal Cord Atlas_ Cholinergic.h5ad"  # Replace with your actual path
    extract_genes_from_anndata(anndata_path, "gene_names", "ensembl",
                               "../templates/genedb_ensembl.tsv")