---
title: Documenting Code
description: Learn about documenting code when contributing to ContentLib.
sidebar:
  order: 10
draft: true
---

## **Documenting Code**

Clear and consistent documentation is essential for maintaining a high-quality codebase in ContentLib. Properly
documenting your code ensures it’s easy to understand, extend, and maintain, fostering collaboration within the
community.

This guide outlines the standards and best practices for documenting code in C#, specifically using XML comments, the 
standard way of documenting C# code.

---

### Documentation Requirements for Classes in ContentLib

1. **Interface Descriptions**: Due to the API being primarily Interface focused, it is a requirement for all Interfaces
to include full documentation of both the class entire, and each individual method.
2. **Class Summary**: Every class, where sensible, should have a `<summary>` tag explaining its purpose and role in the
project's structure.
3. **Constructor Documentation**: Documentation should be seriously considered for all constructors. With `<summary>`
and `<param>` tags being highly advised.
4. **Property Descriptions**: All public and protected properties must have `<summary>` tags describing their purpose
and behavior. This is crucial, as even the best of us are suseptible to the "I understand so of course my end-users do"
fallacy! 
5. **Method Descriptions**: All public and protected methods must include:
    - `<summary>`: What the method does.
    - `<param>`: Explanation for each parameter.
    - `<returns>`: Description of the return value (if any).
6. **Enum Descriptions**: All enums must have a `<summary>` tag for the enum itself and `<summary>` tags for each value.
This is mainly due to enums being one of the easier concepts to misinterpret as a developer, hence clarity on what an
enum represents is crucial.
7. **Private Members**: Documentation of private members is encouraged, but only required if their purpose is complex
or non-obvious.
8. **Keep Documentation Up-to-Date**: Update documentation whenever functionality or behavior changes. If a contributor
has refactored a method / class, this should also be reflected within the documentation, to ensure accurate description
of API functions.

By adhering to these requirements, future contributors will have a clear understanding of the codebase and its intended behavior.

---

### **How to Document Code in ContentLib**
#### **1. XML Comments**
In ContentLib, the code primarily utilises XML comments (`///`) to document public-facing elements.
These comments should:
- Clearly describe the purpose of the element.
- Include details about parameters, return values, and exceptions.
- Use the following XML tags as a minimum `<summary>`, `<param>`, and `<returns>`.

Example:
```csharp
/// <summary>
        /// Registers a class that implements IListener and subscribes to each IGameEvent method within the class. 
        /// </summary>
        /// <param name="listener">The listener to register.</param>
        /// <exception cref="InvalidOperationException">Called if the methods marked with the EventDelegate
        /// Attribute are not correctly formatted.</exception>
        public void RegisterListener(IListener listener){}
```

---

#### **2. Inline Comments**
Use of inline comments (`//`) is discouraged where possible. Code should be self-explanatory in most instances. However,
in complex use-cases, inline comments can be used sparingly to add further context.

Example:
```csharp
// Apply a 10% bonus if the weapon is enchanted.
if (weapon.IsEnchanted)
{
    baseDamage *= 1.1f;
}
```

---

#### **3. Interface Comments**
Please ensure when developing new interfaces, the following is used as the class summaries:
Example:
```csharp
/// <summary>
/// An interface representing the general functionality of [functionality description goes here] 
/// </summary>
public interface IExampleInterface
{
    // Class implementation
}
```

---

### **Guidelines for Writing Documentation**
1. **Be Concise but Informative:** Provide enough detail to explain the purpose without being overly verbose.
2. **Use Consistent Formatting:** Follow the same style and structure utilised in similar classes in the project.
3. **Focus on Behavior:** Highlight what the code does and why, rather than how it does it.
4. **Keep It Up to Date:** Always update documentation when modifying the related code.

---

### **Common XML Tags**
| Tag            | Usage                                                                                  |
|-----------------|----------------------------------------------------------------------------------------|
| `<summary>`     | Briefly describes the purpose of a method, class, or property.                        |
| `<param>`       | Describes a method parameter.                                                         |
| `<returns>`     | Describes the return value of a method.                                               |
| `<exception>`   | Describes exceptions that a method can throw.                                         |
| `<remarks>`     | Provides additional information or context.                                           |
| `<example>`     | Provides a usage example.                                                             |

---

### **Examples**
**Good Documentation:**
```csharp
/// <summary>
/// Retrieves a list of all active mods in the system.
/// </summary>
/// <returns>A list of active mods.</returns>
public List<string> GetActiveMods()
{
    // Implementation
}
```

**Bad Documentation:**
```csharp
/// <summary>
/// Gets the mods.
/// </summary>
/// <returns>The mod list</returns>public List<string> GetMods()
{
    // Implementation
}
```

