#!/bin/bash

rm -r ./claude/; mkdir ./claude

for filename in $(find . -name '*.tsx' ); 
do
    new_name="${filename:2}"
    echo "${new_name//// - }"
    cp -- "$filename" "./claude/${new_name//// - }"
done

for filename in $(find ./types -name '*.ts' ); 
do
    new_name="${filename:2}"
    echo "${new_name//// - }"
    cp -- "$filename" "./claude/${new_name//// - }"
done

files=("tailwind.config.ts")

for f in $files;
do
    echo $f
    cp -- "./$f" "./claude/${f}"
done
