import unittest
import os
import csv
import requests
from cProfile import label

from dendrogram_tools import cas_json_2_nodes_n_edges, read_json_file
from template_generation_utils import get_synonyms_from_taxonomy, get_synonym_pairs, \
    PAIR_SEPARATOR, OR_SEPARATOR, read_taxonomy_config, get_subtrees, read_dendrogram_tree, \
    find_singleton_chains, generate_dendrogram_tree, read_one_concept_one_name_tsv, get_class_membership_dict


PATH_TO_CAS = os.path.join(os.path.dirname(os.path.realpath(__file__)),
                                           "../src/dendrograms/CS20250428.json")
PATH_OCON_REPORT_TSV = os.path.join(os.path.dirname(os.path.realpath(__file__)),
                                           "./test_data/one_concept_one_name.tsv")
OCON_TSV = os.path.join(os.path.dirname(os.path.realpath(__file__)),
                                           "../src/dendrograms/one_concept_one_name_curation.tsv")


class TemplateUtilsTest(unittest.TestCase):

    # not test
    # def report_missing_alias(self):
    #     dend_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "../dendrograms/CCN202002013.json")
    #     dend = dend_json_2_nodes_n_edges(dend_path)
    #     dend_tree = read_dendrogram_tree(dend_path)
    #
    #     subtrees = get_subtrees(dend_tree, read_taxonomy_config("CCN202002013"))
    #
    #     path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "./test_data/alias_report.tsv")
    #
    #     with open(path, mode='w') as out:
    #         writer = csv.writer(out, delimiter="\t", quotechar='"')
    #         writer.writerow(["ID", "cell_set_additional_alias", "cell_set_aligned_alias"])
    #         for o in dend['nodes']:
    #             if o['cell_set_accession'] in set.union(*subtrees) and not o['cell_set_preferred_alias']:
    #                 if o['cell_set_additional_aliases'] or o['cell_set_aligned_alias']:
    #                     additional_alias = o['cell_set_additional_aliases'] if 'cell_set_additional_aliases' in o.keys() else ''
    #                     aligned_alias = o['cell_set_aligned_alias'] if 'cell_set_aligned_alias' in o.keys() else ''
    #                     writer.writerow([o['cell_set_accession'], additional_alias, aligned_alias])

    # not test
    def test_find_direct_paths(self):
        dend = cas_json_2_nodes_n_edges(PATH_TO_CAS)
        dend_tree = generate_dendrogram_tree(dend)
        node_index = {node['cell_set_accession']: node for node in dend['nodes']}

        cas = read_json_file(PATH_TO_CAS)
        labelsets = { labelset["name"]: labelset["rank"] for labelset in cas['labelsets'] if "rank" in labelset}

        chains = find_singleton_chains(dend_tree)
        # longer chains and then by "higher rank first" sorting
        chains.sort(key=lambda chain: (-len(chain), -1 * labelsets[node_index[chain[0]]["labelset"]]))

        label_chain = set()
        for chain in chains:
            chain_str = "Chain: " + " -> ".join([node_index[n]["cell_label"] for n in chain])
            print(chain_str)
            label_chain.add(chain_str)


        # self.assertEqual(248, len(chains))
        # self.compare_with_old_results(label_chain)
        self.write_chains_to_tsv(chains, node_index, labelsets, PATH_OCON_REPORT_TSV)

    def test_one_concept_one_name_dict_population(self):
        curation_data = read_one_concept_one_name_tsv(OCON_TSV)
        self.assertEqual(10, len(curation_data))
        self.assertEqual(curation_data.get("25 Pineal Glut"), "pinealocyte")
        self.assertEqual(curation_data.get("262 Pineal Crx Glut"), "pinealocyte")
        self.assertEqual(curation_data.get("1030 Pineal Crx Glut_1"), "pinealocyte")
        self.assertEqual(curation_data.get("4606 Pineal Crx Glut_1"), "pinealocyte")
        self.assertEqual(curation_data.get("316 Bergmann NN"), "Bergman glial cell")
        self.assertEqual(curation_data.get("1157 Bergmann NN_1"), "Bergman glial cell")
        self.assertEqual(curation_data.get("5206 Bergmann NN_1"), "Bergman glial cell")


    def write_chains_to_tsv(self, chains, node_index, labelsets, output_filepath):
        # Sort labelsets by rank (higher rank to lower rank)
        sorted_labelsets = sorted(labelsets, key=labelsets.get, reverse=True)
        sorted_labelsets.append("preferred_name")

        with open(output_filepath, mode='w') as out:
            writer = csv.writer(out, delimiter="\t", quotechar='"')
            writer.writerow(sorted_labelsets)

            for chain in chains:
                row = [''] * len(sorted_labelsets)
                for item in chain:
                    labelset = node_index[item]["labelset"]
                    column_index = sorted_labelsets.index(labelset)
                    row[column_index] = node_index[item]["cell_label"]
                writer.writerow(row)

    def compare_with_old_results(self, label_chain):
        url = "https://gist.githubusercontent.com/dosumis/af5104483b5c26fdd382495d1b71bc5e/raw/0839b81e32ab479535e39d07f645a7c1f2bca47c/1_cell_set_multiple_levels.txt"
        response = requests.get(url)
        response.raise_for_status()
        lines = response.text.splitlines()
        rows_set = set(lines[1:])
        print(len(rows_set))
        print(len(label_chain))
        diff = rows_set.difference(label_chain)
        for item in diff:
            print(item)

    def test_class_membership(self):
        dend = cas_json_2_nodes_n_edges(PATH_TO_CAS)
        dend_tree = generate_dendrogram_tree(dend)
        membership = get_class_membership_dict(dend_tree)

        self.assertEqual(6896, len(membership.keys()))
        self.assertEqual("CS20230722_CLAS_01", membership["CS20230722_CLAS_01"])
        self.assertEqual("CS20230722_CLAS_01", membership["CS20230722_SUBC_001"])
        self.assertEqual("CS20230722_CLAS_01", membership["CS20230722_SUPT_0001"])
        self.assertEqual("CS20230722_CLAS_01", membership["CS20230722_CLUS_0001"])


if __name__ == '__main__':
    unittest.main()
