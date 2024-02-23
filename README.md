# teaxyz-frens-finder

Currently there is no easy way in the UI of adding your frens and co-contributors to a project already registered with Tea.

Alternatively we can directly edit our project's `tea.yaml` to add the other contributors. 

But we still need to find their Tea address. This is what this package does.

## Usage

```bash
# NPM
npx teaxyz-frens-finder <github username>

# Yarn Berry
yarn dlx teaxyz-frens-finder <github username>
```

## Example

```bash
yarn dlx teaxyz-frens-finder jaybuidl
0x79AEf...582E14b51AE
# redacted on purpose
```

## Updating your project's Tea.yaml

```yaml
# https://tea.xyz/what-is-this-file
---
version: 1.0.0
codeOwners:
  - INSERT FREN 1 ADDRESS HERE
  - INSERT FREN 2 ADDRESS HERE
  - INSERT FREN 3 ADDRESS HERE
  - ...
quorum: 1

```
