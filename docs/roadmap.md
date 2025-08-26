# What is missing

- We are not processing clusters
- Links to ABC atlas
- Curate: src/dendrograms/one_concept_one_name.tsv
- Curate: src/dendrograms/CL_ontology_subset.tsv
- Duplicate labels 
  - "F M Glut" (used src/dendrograms/one_concept_one_name_curation.tsv to fix)
  - "Astrocyte" (renamed CS20250428_SUBCL_0000 in the cas json file to fix)
  - "VLMC" (renamed SUPT in the cas json)
  - "STR SST-CHODL GABA" (renamed SUPT in the cas json)
  - "SMC" (renamed SUPT in the cas json)
- Revisit `src/scripts/disclaimer_generator.py` to update the location disclaimers
- Check `src/dendrograms/taxonomy_details.yaml` for the ontology links
- Update templates for multi-species
  - In template_generation_tools we use the following for now:
  ```python
        d['Taxon'] = taxonomy_config['Species'][0]
        d['Taxon_abbv'] = taxonomy_config['Gene_abbv'][0]
        d['Brain_region'] = taxonomy_config['Brain_region'][0]
  ```
- Add disclaimers
- Fix publication in `src/scripts/template_generation_tools.py` `XYZ et al`
