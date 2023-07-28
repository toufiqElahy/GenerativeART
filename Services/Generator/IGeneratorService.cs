// <copyright file="IGeneratorService.cs" company="Tedeschi">
// Copyright (c) Tedeschi. All rights reserved.
// </copyright>

namespace GenerativeNFT.Services.Generator
{
    using System.Collections.Generic;
    using GenerativeNFT.Model;

    public interface IGeneratorService
    {
        List<ImageDescriptor> Create(List<Layer> layers, int collectionSize, string layersFolder);
    }
}
