from elasticsearch import helpers, Elasticsearch
import csv

es = Elasticsearch()

with open('data.csv') as f:
    reader = csv.DictReader(f)
    helpers.bulk(es, reader, index='express', doc_type='news')
