#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os
import re
import PyPDF2
import json

# poišče pdf veljavne datoteke po disku (pravilen ime)
# prekopira, naredi mini slikico, prirpavi json objekt za Angular projekt


def extract_info_from_filename(filepath):
    _, filename = os.path.split(filepath)
    # pattern = r'^(.*)_([^_]*)_([^_]*)_(\w+)\.pdf$'
    #pattern = r'^(.*)-([^_]*)-([^_]+)-(\d+)-(.+)_([^[]+)\.pdf$'
    #pattern = r'^(.*)-([^_]*)-([^_]+)-(\d+)-(.+)_([^[]+).pdf$'
    pattern = r'^(.*?)\s*-\s*(.*?)\s*\[([^]]+)\]\.pdf$'
    # pattern = r'^(.[a-zA-Z\s\S]*?)\s*_\s*(.*?)\s*\[([^]]+)\]\.pdf$'
    # (.*?)\s\S\d[^-]

    # (?<=)*(.*?)(_)
    # (?<=)*(.*?)(_*)(?<=\[)(.*?)(?=\]) # dela texkt in taksonomija
    # (?<=)*(.*?)([^_]*)(.[^_]*)(?<=\[)(.*?)(?=\])
    # (?<=)*(.*?[^_])_([a-zA-Z.\s]*)(?<=)\[(.*?)(?=\])
    pattern = '(?<=)*(.*?)_([^_]*)(.[^_]*)(?<=\[)(.*?)(?=\])'

    # Krönungsmesse-Messe-werk 317-01-Kyrie_W.A.Mozart[Maša].pdf
    # Over Hill Over Dale_Ralph Vaughan Williams_William Shakespeare[Angleške].pdf
    print("")
    match = re.match(pattern, filename)
    #match = re.findall(pattern, filename)
    print("\n"+filename)
    #for (letters, numbers) in re.findall(pattern, filename):
    #    print(numbers, '*', letters)

    if match:
        #print("1")
        title, composer, text, pdf_type = match.groups()
        #print(pdf_type)
        text = text.replace("[", "")
        text = text.replace("_", "")
        #x = txt.replace("bananas", "apples")
        #print("2")
        # print(match.groups())
        return {
            "title": title,
            "composer": composer,
            "text": text,
            "type": pdf_type
        }
    else:
        print ("err")
        return None


def process_pdf_file(pdf_path):
    with open(pdf_path, 'rb') as pdf_file:
        pdf_reader = PyPDF2.PdfFileReader(pdf_file)
        text = ''
        for page_num in range(pdf_reader.numPages):
            text += pdf_reader.getPage(page_num).extractText()
        return text.strip()


def process_folder(folder_path):
    result = []
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.lower().endswith('.pdf'):
                pdf_path = os.path.join(root, file)

                info = extract_info_from_filename(file)
                print(info)
                if info:
                    info["text"] = process_pdf_file(pdf_path)
                    result.append(info)
    return result



folder_path = os.getcwd()  # Replace with the path to your folder
print(folder_path)
result = process_folder(folder_path)


# Displaying the result or saving to a JSON file
print(json.dumps(result, indent=2))

# If you want to save to a JSON file
# with open("output.json", "w") as json_file:
#     json.dump(result, json_file, indent=2)



##folder_path = "/home/gregor/MAG/4.Razvoj naprednih spletnih uporabniških vmesnikov/Seminar/note/"  # Replace with the path to your folder
##result = process_folder(folder_path)

# Displaying the result or saving to a JSON file
##print(json.dumps(result, indent=2))

# If you want to save to a JSON file
# with open("output.json", "w") as json_file:
#     json.dump(result, json_file, indent=2)
