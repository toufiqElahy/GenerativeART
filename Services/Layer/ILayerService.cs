// <copyright file="ILayerService.cs" company="Tedeschi">
// Copyright (c) Tedeschi. All rights reserved.
// </copyright>

namespace GenerativeNFT.Services.Layer
{
    using System.Collections.Generic;
    using GenerativeNFT.Model;

    public interface ILayerService
    {
        List<Layer> Load(string path);
    }
}
