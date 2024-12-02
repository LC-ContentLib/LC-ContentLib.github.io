---
title: Interfaces and Implementations
description: Learn about interfaces and implementations when contributing to ContentLib.
sidebar:
  order: 30
draft: true
---

## **Interfaces and Implementations**

The interfaces utilized within ContentLib form the backbone of the API's structure and utility. It is crucial to have a
full understanding of how interfaces are utilized throughout ContentLib and why adhering to this approach is vital for
consistency, flexibility, and maintainability.

---

### **API Structure**

*FLOWCHART GOES HERE*

As illustrated in the figure above, ContentLib defines all its API logic in terms of interfaces, encompassing everything
from in-game entities to in-game items. The API project itself works exclusively with interfaces.

This approach provides **two key advantages**:

1. **Simplified Core Logic Maintenance**:  
   Interfaces enable core systems (e.g., the Entity Manager) to operate independently of specific implementations. This
means that any instance implementing the expected interface can be handled uniformly. 
    
    For example, player registration
and enemy registration use the same underlying function because both entities adhere to the same interface.

2. **Ease of Mod Maintenance During Updates**:  
   When Lethal Company is updated, mod makers, even those using APIs, typically need to rewrite or adjust their mods.

    In ContentLib, if implementation details change significantly post-update, mod developers are shielded from this 
complexity. They only interact with the interface's defined functionality. 

    Hence, nothing more than a dependency update would be required for mods to work with newly updated API versions. 

---

### **Guidelines for Interface Usage**
To ensure consistent, high-quality contributions and maintain the flexibility of ContentLib’s architecture,
the following requirements must be adhered to:

1. **Interface-Centric Design**:
    - All API logic (anything that ends up in ```LC-ContentLib/src/ContentLib.API/Model``` ) must be defined in terms of
interfaces. Hardcoding class-specific logic directly into the API in not acceptable.
    - Implementations should fulfill the contract defined by the interface without introducing unrelated behavior.

2. **Adherence to Interface Contracts**:
    - Implement all required members of an interface completely and accurately. PRs that include incomplete
implementations will not be approved.

3. **Avoid Breaking Changes**:
    - Interfaces should remain as stable as possible to minimize disruptions to mod makers.
    - Any proposed changes to existing interfaces must be reviewed carefully and justified with clear benefits.
    - Any proposed removals of features from an interface must be reviewed carefully and for at least 1 major version 
after proposed removal, the removal must instead be marked with the ```Depreciated``` attribute tag instead, to provide ample
time for mod-makers to action changes as and when required. 

4. **Separate Core Logic from Mod Logic**:
    - Core systems (e.g., managers) must operate solely in terms of interfaces.
    - Ensure mod logic does not leak into or depend on core API implementation details.

5. **Focus on Modder Experience**:
    - Interfaces should prioritize simplicity and ease of use for modders.
    - Avoid exposing internal complexity; modders should only need to know what an interface does, not how it’s
implemented. I.e. a developer end-user should not have to worry about RPC calls, if it is realistic to handle that 
logic without developer input.

